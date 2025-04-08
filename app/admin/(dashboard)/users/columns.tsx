"use client"

import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "fullName",
    header: "Jménu a příjmení",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]
