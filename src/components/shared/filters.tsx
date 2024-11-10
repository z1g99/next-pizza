import React from 'react'
import {CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title} from '@/components/shared'
import {Input} from '@/components/ui'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({className}) => {
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
					<Input type='number' placeholder='от 299' min={0} max={1000}/>
					<Input type='number' placeholder='до 1999' min={100} max={1000}/>
				</div>
				<RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
			</div>
			
			{/* Выбор ингридиентов */}
			<CheckboxFiltersGroup
				title='Ингридиенты'
				className='mt-5'
				limit={6}
				defaultItems={[
					{
						text: 'Сырный соус',
						value: '1'
					},
					{
						text: 'Моццарелла',
						value: '2'
					},
					{
						text: 'Чеснок',
						value: '3'
					},
					{
						text: 'Солённые огурчики',
						value: '4'
					},
					{
						text: 'Красный лук',
						value: '5'
					},
					{
						text: 'Томаты',
						value: '6'
					}
				]}
				items={[
					{
						text: 'Сырный соус',
						value: '1'
					},
					{
						text: 'Моццарелла',
						value: '2'
					},
					{
						text: 'Чеснок',
						value: '3'
					},
					{
						text: 'Солённые огурчики',
						value: '4'
					},
					{
						text: 'Красный лук',
						value: '5'
					},
					{
						text: 'Томаты',
						value: '6'
					},
					{
						text: 'Сырный соус',
						value: '1'
					},
					{
						text: 'Моццарелла',
						value: '2'
					},
					{
						text: 'Чеснок',
						value: '3'
					},
					{
						text: 'Солённые огурчики',
						value: '4'
					},
					{
						text: 'Красный лук',
						value: '5'
					},
					{
						text: 'Томаты',
						value: '6'
					}
				]}
				/>
		</div>
	)
}

