<div align="center">
  <a href="https://github.com/LostArrows27/aratamete-spotify">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" alt="Logo" width="160" height="160">
  </a>
  <h3>Aratamete Spotify</h3>
<div>A clone version of Spotify</div>
</div>

## About the project

- This is a music player application that allows users to listen to music, upload their own music, and create playlists based on Spotify.

## Built with

[![My Skills](https://skillicons.dev/icons?i=nextjs,react,tailwind,supabase,typescript&perline=10)](https://skillicons.dev)

- Project is built with NextJS, React, Typescript, TailwindCSS and Supabase
- I also use several external library like Zod, React-Hook-Form, Zustand for form and stage management

## Preview

- You guys can view demo website at [https://aratamete-spotify.vercel.app/](https://aratamete-spotify.vercel.app/)

<div align="center">
    <img src = "https://github.com/LostArrows27/LostArrows27/assets/97510841/3735f3bf-e9a3-476d-a0cf-5797375a2b9b">
</div>

## Set up and Local Development

1. Fork this project
2. Create new project in [Supabase](https://supabase.com/) and get the supabase url, anon key and service role key in project settings
3. Create the `.env.local` file and add these 3 variables

```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

4. Run these command and open `localhost:3000` in your browser

```bash
npm install ; npm run dev
```
