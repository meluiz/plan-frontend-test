import { Loader2Icon } from 'lucide-react'

const Loading = () => {
  return (
    <div className="w-full py-8 flex justify-center items-center relative isolate">
      <Loader2Icon
        className="animate-spin text-black/50"
        size={32}
        strokeWidth={3}
      />
    </div>
  )
}

export default Loading
