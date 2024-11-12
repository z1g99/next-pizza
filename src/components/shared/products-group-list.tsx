'use client'

import React from 'react'
import {cn} from '@/lib/utils'
import {Title} from '@/components/shared/title'
import {ProductCard, ProductCardProps} from '@/components/shared/product-card'
import {useIntersection} from 'react-use'
import {useCategoryStore} from '@/store/category'

type Item = ProductCardProps

interface Props {
	className?: string
	title: string
	products: Item[]
	categoryId: number
	listClassName?: string
}

export const ProductsGroupList: React.FC<Props> = ({
	className,
	title,
	products,
	categoryId,
	listClassName
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [setActiveCategoryId, categoryId, title, intersection?.isIntersecting])
	
	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5'/>
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						imageUrl={product.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}

