'use client'

import {Ingredient} from '@prisma/client'
import {Api} from '@/services/api-client'
import React from 'react'
import {useSet} from 'react-use'

interface ReturnProps {
	items: Ingredient[]
	loading: boolean
	selectedIds: Set<string>
	onAddId: (id: string) => void
}

export const useFilterIngredients = (): ReturnProps => {
	const [items, setItems] = React.useState<Ingredient[]>([])
	const [loading, setLoading] = React.useState(false)
	
	const [selectedIds, {toggle}] = useSet(new Set<string>([]))
	
	React.useEffect(() => {
		async function getIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll()
				setItems(ingredients)
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		
		getIngredients()
	}, [])
	
	return {items, loading, onAddId: toggle, selectedIds}
}