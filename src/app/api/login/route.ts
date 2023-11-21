// // api/login/route.ts
// import supabaseClient from "@/supabase/client";

// export interface AuthResponse {
//   user: null;
//   session: null;
//   messageId?: string | null | undefined;
// }

// export async function signInUser(email: string): Promise<AuthResponse | null> {
//   try {
//     const { data, error } = await supabaseClient.auth.signInWithOtp({
//       email,
//       options: {
//         emailRedirectTo: "http://localhost:3000",
//       },
//     });

//     if (error) {
//       // Handle the error or throw an exception
//       throw error;
//     }

//     // Return relevant data if needed
//     return data;
//   } catch (error) {
//     console.error("An error occurred:", error);
//     return null;
//   }
// }
