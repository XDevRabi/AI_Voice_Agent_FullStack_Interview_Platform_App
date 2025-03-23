"use server";
import { db } from "@/firebase/admin";

// Fetch all the interview from firebase database that is associate with userId and return them as an array of Interview objects
export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  // Return a promise that is array of Interview objects or null if there is an error
  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

// Fetch latest interviews from firebase database that is created by other user.
export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params; // limit the number of interviews returned to 20 by default

  const interviews = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userId", "!=", userId) // exclude interviews created by the current user
    .limit(limit)
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}
