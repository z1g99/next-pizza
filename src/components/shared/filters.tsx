'use client'

import React from 'react'
import {CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title} from '@/components/shared'
import {Input} from '@/components/ui'
import {useFilterIngredients} from '@/hooks/useFilterIngredients'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({className}) => {
	const {items, loading, selectedIds, onAddId} = useFilterIngredients()
	const ingredients = items.map((item) => ({ value: String(item.id), text: item.name }))
	
	return (
		<div className={className}>
			<Title text='Фильтры' size='sm' className='mb-5 font-bold'/>
			
			{/* Верхние чекбоксы */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1'/>
				<FilterCheckbox text='Новинки' value='2'/>
			</div>
			
			{/* Сортировка по цене */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='от 0' min={0} max={2000}/>
					<Input type='number' placeholder='до 2000' min={100} max={2000}/>
				</div>
				<RangeSlider min={0} max={2000} step={10} value={[0, 2000]}/>
			</div>
			
			{/* Выбор ингридиентов */}
			<CheckboxFiltersGroup
				title='Ингридиенты'
				className='mt-5'
				limit={6}
				defaultItems={ingredients.slice(0, 6)}
				items={ingredients}
				loading={loading}
				onClickCheckbox={onAddId}
				selectedIds={selectedIds}
				/>
		</div>
	)
}

