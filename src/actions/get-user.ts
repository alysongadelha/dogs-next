"use server";

import { USER_GET } from "@/utils/api";
import apiError from "@/utils/api-error";
import { cookies } from "next/headers";

export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function getUser() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Invalid token");

    const { url } = USER_GET();
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Error to fetch User.");
    const data = (await response.json()) as User;
    return { data, ok: true, error: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
