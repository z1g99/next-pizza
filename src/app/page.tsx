import {Container, Filters, ProductsGroupList, Title, TopBar} from '@/components/shared'

export default function Home() {
  return <>
    <Container className='mt-10'>
      <Title text='Все пиццы' size='lg' className='font-extrabold'/>
    </Container>
    <TopBar/>
    <Container className='pb-14 mt-10'>
      <div className='flex gap-[80px]'>
        {/* Фильтрация */}
        <div className='w-[250px]'>
          <Filters/>
        </div>
        {/* Список товаров */}
        <div className='flex-1'>
          <div className='flex flex-col gap-16'>
            <ProductsGroupList title='Пиццы' products={[
              {id: 1, name: 'Жюльен', price: 529, imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif'},
              {id: 2, name: 'Жюльен', price: 529, imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif'},
              {id: 3, name: 'Жюльен', price: 529, imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif'},
              {id: 4, name: 'Жюльен', price: 529, imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif'},
            ]} categoryId={1}/>
            <ProductsGroupList title='Завтраки' products={[
              {id: 1, name: 'Сырники', price: 135, imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9060DD723610942E8F368B03540A.avif'},
              {id: 2, name: 'Сырники', price: 135, imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9060DD723610942E8F368B03540A.avif'},
              {id: 3, name: 'Сырники', price: 135, imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9060DD723610942E8F368B03540A.avif'},
              {id: 4, name: 'Сырники', price: 135, imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9060DD723610942E8F368B03540A.avif'},
            ]} categoryId={2}/>
          </div>
        </div>
      </div>
    </Container>
  </>
}
