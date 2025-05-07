import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function CharacterPagination({
  page,
  totalPages,
  setPage,
}: {
  page: number
  totalPages: number
  setPage: (p: number) => void
}) {
  const goTo = (p: number) => {
    if (p >= 1 && p <= totalPages) setPage(p)
  }

  return (
    <Pagination className="my-4 justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => goTo(page - 1)}
            className={page === 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {/* Pages dynamiques (optionnel : ici on affiche seulement ±1 autour de la page actuelle) */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((p) => Math.abs(p - page) <= 1 || p === 1 || p === totalPages)
          .map((p, idx, arr) => (
            <PaginationItem key={p}>
              {idx > 0 && p - arr[idx - 1] > 1 && <span className="px-2">...</span>}
              <PaginationLink
                isActive={p === page}
                onClick={() => goTo(p)}
                className="cursor-pointer"
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => goTo(page + 1)}
            className={page === totalPages ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
