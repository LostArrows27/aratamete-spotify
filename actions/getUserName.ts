export default function getUserName(
  userMetadata:
    | {
        [key: string]: any;
      }
    | undefined
): string {
  if (!userMetadata) return "";
  if (userMetadata.iss === "https://discord.com/api")
    return userMetadata.custom_claims.global_name;

  return userMetadata.name;
}
