export default function TopBar() {
    const text = "🚚 Free shipping for any order above 1000 EGP";

    return (
        <div className="bg-slate-100 overflow-hidden py-2 fixed top-0 w-full z-[999]">

            <div className="flex whitespace-nowrap">

                {/* Track */}
                <div className="flex animate-marquee">
                    <span className="px-10 text-[18px] font-medium">{text}</span>
                    <span className="px-10 text-[18px] font-medium">{text}</span>
                    <span className="px-10 text-[18px] font-medium">{text}</span>
                </div>

                {/* Duplicate track */}
                <div className="flex animate-marquee">
                    <span className="px-10 text-[18px] font-medium">{text}</span>
                    <span className="px-10 text-[18px] font-medium">{text}</span>
                    <span className="px-10 text-[18px] font-medium">{text}</span>
                </div>

            </div>
        </div>
    );
}