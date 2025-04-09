"use server";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc, sql } from "drizzle-orm";
import { eq } from 'drizzle-orm';

export const createBook = async (params: BookParams) => {
  try {
    const newBook = await db
      .insert(books)
      .values({
        ...params,
      })
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while creating the book",
    };
  }
};

export async function getLatestBooks() {
  const data = await db
    .select()
    .from(books)
    .orderBy(desc(books.createdAt))
    .limit(5);

  return data;
}

export async function getAllBooks() {
  const data = await db.select().from(books).orderBy(desc(books.createdAt));
  return data;
}

export async function geBooksCount() {
  const result = await db
    .select({ count: sql<number>`count(${books.id})` })
    .from(books);

  const count = result[0]?.count ?? 0;

  return count;
}

export async function getDeleteBook(id: string) {
  try {
    const deletedBook = await db
      .delete(books)
      .where(eq(books.id, id))
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(deletedBook[0])),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while deleting the book",
    };
  }
}