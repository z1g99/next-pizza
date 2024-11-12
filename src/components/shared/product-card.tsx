import React from 'react'
import Link from 'next/link'
import {Plus} from 'lucide-react'
import {Title} from '@/components/shared/title'
import {Button} from '@/components/ui'

export interface ProductCardProps {
	id: number
	name: string
	price: number
	imageUrl: string
	className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({id, name, price, imageUrl, className}) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				{/* Картинка */}
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
					<img className='w-[215px] h-[215px]' src={imageUrl} alt={name}/>
				</div>
				{/* Заголовок */}
				<Title text={name} size='sm' className='mb-1 mt-3 font-bold'/>
				{/* Ингредиенты */}
				<p className='text-sm text-gray-400'>
					Цыпленок, шампиньоны, ароматный грибной соус, лук, сухой чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо
				</p>
				<div className='flex justify-between items-center mt-4'>
					{/* Цена */}
					<span className='text-[20px]'>
						от <b>{price} ₽</b>
					</span>
					{/* Кнопка "Добавить" */}
					<Button variant='secondary' className='text-base font-bold'>
						<Plus size={20} className='mr-1'/>
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	)
}

