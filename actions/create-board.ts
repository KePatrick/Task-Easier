"use server"
import { z } from "zod"

import { db } from "@/lib/db"

const CreateBoard = z.object({
    title: z.string()
})

export async function create(formdata: FormData) {

    const { title } = CreateBoard.parse({
        title: formdata.get("title")
    })

    await db.board.create({
        data: {
            title,
        }
    })
}
