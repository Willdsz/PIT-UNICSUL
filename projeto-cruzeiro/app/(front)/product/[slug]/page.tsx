import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return { title: 'Produto não encontrado' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({ params }: { params: { slug: string } }) {
  const product = await productService.getBySlug(params.slug)

  if (!product) {
    return <div>Produto não encontrado</div>
  }

  return (
    <>
      <div className="my-2">
        <Link href="/">Voltar para loja</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        {/* IMAGEM */}
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* INFORMAÇÕES */}
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl font-bold">{product.name}</h1>
            </li>

            <li>
              <p><strong>Sabor:</strong> {product.flavor}</p>
            </li>

            <li>
              <p><strong>Categoria:</strong> {product.category}</p>
            </li>

            <li>
              <div className="divider"></div>
            </li>

            <li>
              <p><strong>Descrição:</strong> {product.description}</p>
            </li>
          </ul>
        </div>

        {/* CARD DE COMPRA */}
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Preço</div>
                <div>R$ {product.price}</div>
              </div>

              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
