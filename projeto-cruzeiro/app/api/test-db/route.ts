import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();
    return new Response(
      JSON.stringify({ message: "🟢 Conexão bem-sucedida com o MongoDB!" }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        message: "🔴 Erro ao conectar",
        error: err.message
      }),
      { status: 500 }
    );
  }
}
