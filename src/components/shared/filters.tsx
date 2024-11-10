import React from 'react'
import {FilterCheckbox, Title} from '@/components/shared'
import {Input} from '@/components/ui'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({className}) => {
	return (
		<div className={className}>
			<Title text='Фильтры' size='sm' className='mb-5 font-bold'/>
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1'/>
				<FilterCheckbox text='Новинки' value='2'/>
			</div>
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='от 299' min={0} max={1000}/>
					<Input type='number' placeholder='до 1999' min={100} max={1000}/>
				</div>
			</div>
		</div>
	)
}

