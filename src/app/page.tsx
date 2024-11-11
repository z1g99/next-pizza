import {Container, Filters, Title, TopBar} from '@/components/shared'
import {ProductCard} from '@/components/shared/product-card'

export default function Home() {
  return <>
    <Container className='mt-10'>
      <Title text='Все пиццы' size='lg' className='font-extrabold'/>
    </Container>
    <TopBar/>
    <Container className='pb-14 mt-10'>
      <div className='flex gap-[60px]'>
        {/* Фильтрация */}
        <div className='w-[250px]'>
          <Filters/>
        </div>
        {/* Список товаров */}
        <div className='flex-1'>
          <div className='flex flex-col gap-16'>
            <ProductCard id={1} name='Жюльен' price={529} imageUrl='https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif'/>
          </div>
        </div>
      </div>
    </Container>
  </>
}
