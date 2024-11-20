'use client'

import React from 'react'
import {FilterCheckbox, FilterCheckboxProps} from '@/components/shared/filter-checkbox'
import {Input} from '@/components/ui'
import {Skeleton} from '@/components/ui/skeleton'

type Item = FilterCheckboxProps

interface Props {
	className?: string
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	loading?: boolean
	selectedIds: Set<string>
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onClickCheckbox,
	defaultValue,
	loading,
  selectedIds
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')
	
	if (loading) {
		return <div className={className}>
			<p className="font-bold mb-3">{title}</p>
			<Skeleton className='h-6 mb-5 rounded-2'/>
			<Skeleton className='h-6 mb-5 rounded-2'/>
			<Skeleton className='h-6 mb-5 rounded-2'/>
			<Skeleton className='h-6 mb-5 rounded-2'/>
			<Skeleton className='h-6 mb-5 rounded-2'/>
			<Skeleton className='h-6 mb-5 rounded-2'/>
			<Skeleton className='w-28 h-6 mb-5 rounded-2'/>
		</div>
	}
	
	const list = showAll
		? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
		: defaultItems.slice(0, limit)
	
	const onChangeSearchInput = (value: string) => {
		setSearchValue(value)
	}
	
	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>
			{showAll && (
				<div className="mb-5">
					<Input
						onChange={e => onChangeSearchInput(e.target.value)}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}
			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selectedIds?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>
			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}

