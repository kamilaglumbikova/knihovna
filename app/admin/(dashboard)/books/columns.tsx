"use client"

import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
]
