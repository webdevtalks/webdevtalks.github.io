import { useCallback, useEffect, useState } from 'react'
import { getSheetsData } from '../services/sheets'

const useSheets = (query: string) => {
  const [value, setValue] = useState<string | null>(null)

  const getLink = useCallback(() => {
    getSheetsData(query)
      .then(setValue)
      .catch(err => { throw new Error(err) })
  }, [query])

  useEffect(() => {
    getLink()
  }, [getLink])

  return { value }
}

export default useSheets