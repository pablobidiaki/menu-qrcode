import { Loader2 } from "lucide-react";

const LoadingSpinner = ({message}) => (
    <div className="flex flex-col items-center justify-center p-12 w-full min-h-[200px] animate-in fade-in duration-500 font-sans">
        <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
        <p className="mt-3 text-sm text-slate-500 font-medium">{message}</p>
    </div>
)

export default LoadingSpinner