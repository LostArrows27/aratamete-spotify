import useUploadModal from "@/hooks/useUploadModal";
import Modal from "../modals/Modal";
import { FieldError, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "../headers/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import uniqid from "uniqid";
import { useRouter } from "next/navigation";

const uploadSchema = z
  .object({
    title: z.string({ required_error: "Title is required" }).trim(),
    author: z.string({ required_error: "Author is required" }).trim(),
    song: z
      .any()
      .refine((files) => files?.length == 1, "Please upload a song")
      .refine(
        (files) => files[0]?.type.includes("audio"),
        "Please choose audio file"
      ),
    image: z
      .any()
      .refine((files) => files?.length == 1, "Please upload an image")
      .refine(
        (files) => files[0]?.type.includes("image"),
        "Please choose image file"
      ),
  })
  .refine((data) => data.author !== "", {
    message: "Author is required",
    path: ["author"],
  })
  .refine((data) => data.title !== "", {
    message: "Title is required",
    path: ["title"],
  });

type UploadProps = z.infer<typeof uploadSchema>;

function UploadModal() {
  const uploadModal = useUploadModal();

  const { user } = useUser();

  const supabaseClient = useSupabaseClient();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<UploadProps>({
    resolver: zodResolver(uploadSchema),
  });

  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
      reset();
    }
  };

  const onSubmit = async (data: UploadProps) => {
    const uniqids = uniqid();

    if (!user) {
      toast.error("You need to login first");
      return;
    }

    // Upload song file
    const { data: songData, error: songError } = await supabaseClient.storage
      .from("songs")
      .upload(`song-${data.title}-${uniqids}`, data.song[0], {
        cacheControl: "3600",
        upsert: false,
      });

    if (songError) {
      toast.error("Failed upload song");
      return;
    }

    // Upload image file
    const { data: imageData, error: imageError } = await supabaseClient.storage
      .from("images")
      .upload(`image-${data.title}-${uniqids}`, data.image[0], {
        cacheControl: "3600",
        upsert: false,
      });

    if (imageError) {
      toast.error("Failed upload image");
      return;
    }

    // Update database
    const { error: uploadError } = await supabaseClient.from("songs").insert({
      user_id: user?.id,
      title: data.title,
      author: data.author,
      song_path: songData.path,
      image_path: imageData.path,
    });

    if (uploadError) {
      toast.error(uploadError.message);
      return;
    }

    router.refresh();
    uploadModal.onClose();
    reset();
    toast.success("Song uploaded");
  };

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="title"
          disabled={isSubmitting}
          {...register("title", { required: true })}
          placeholder="Song title"
          error={errors.title}
        />
        <Input
          id="author"
          disabled={isSubmitting}
          {...register("author", { required: true })}
          placeholder="Song author"
          error={errors.author}
        />
        <div>
          <div className="pb-1">Select a song file</div>
          <Input
            id="song"
            type="file"
            accept="audio/*"
            disabled={isSubmitting}
            {...register("song", { required: true })}
            error={errors.song as FieldError}
          />
        </div>
        <div>
          <div className="pb-1">Select song preview image</div>
          <Input
            id="image"
            type="file"
            accept="image/*"
            disabled={isSubmitting}
            {...register("image", { required: true })}
            error={errors.image as FieldError}
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className="mt-3">
          Upload{" "}
        </Button>
      </form>
      {/* <FormWithoutReactHookForm /> */}
    </Modal>
  );
}

export default UploadModal;
