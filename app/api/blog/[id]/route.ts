import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../route";

const prisma = new PrismaClient();

// ブログの詳細記事取得API
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);
    await main();
    // DBのpostを全て取得する
    const post = await prisma.post.findFirst({ where: { id } }); // エンドポイントhttp:localhost:3000/api/blog/1
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    // 接続を止める（成功してもエラーになっても実行される）
    await prisma.$disconnect();
  }
};

// ブログの記事編集API
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);

    const { title, description } = await req.json();

    await main();
    // DBのpostを全て取得する
    const post = await prisma.post.update({
      data: { title, description },
      where: { id },
    }); // エンドポイントhttp:localhost:3000/api/blog/1
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    // 接続を止める（成功してもエラーになっても実行される）
    await prisma.$disconnect();
  }
};

// ブログの詳細記事削除API
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);

    await main();
    // DBのpostを全て取得する
    const post = await prisma.post.delete({ where: { id } });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    // 接続を止める（成功してもエラーになっても実行される）
    await prisma.$disconnect();
  }
};
