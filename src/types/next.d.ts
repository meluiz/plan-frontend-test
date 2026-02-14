declare namespace Layout {
  type Props<P extends object = Dict> = {
    params: Promise<P>
    children: React.ReactNode
  }
}

declare namespace Page {
  type Props<P extends object = Dict, S extends object = Dict> = {
    params: Promise<P>
    searchParams: Promise<S>
  }
}
