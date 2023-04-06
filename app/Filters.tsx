"use client"

import { useRouter, useSearchParams } from "next/navigation"
import ButtonFilter from "./ButtonFilter"

export default function Filters() {
  const router = useRouter()
  const searchParams: any = useSearchParams()

  const setSearchParams = (params: { [key: string]: any }) => {
    let newParams = new URLSearchParams(searchParams)
    Object.keys(params).forEach((key) => {
      newParams.set(key, params[key])
    })
    router.push(`/?${newParams}`)
  }

  return (
    <ButtonFilter name="Filter">
      <input
        id="archivedTrue"
        type="radio"
        name="filter"
        value="true"
        onClick={(e) => setSearchParams({ archived: e.target.value })}
      />
      <label htmlFor="archivedTrue">Active</label>
      <input
        id="archivedFalse"
        type="radio"
        name="filter"
        value="false"
        onClick={(e) => setSearchParams({ archived: e.target.value })}
      />
      <label htmlFor="archivedFalse">Archived</label>
    </ButtonFilter>
  )
}
