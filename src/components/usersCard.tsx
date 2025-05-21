export default function UsersCard({ type, count = 0 }: { type: string, count?: number }) {
    return (
        <div>
            <div className="card card-border bg-base-100 w-auto h-auto hover:shadow-lg shadow-sky-200">
                <div className="card-body">
                    <h2 className="card-title">{type}</h2>
                    <p>{count}</p>
                </div>
            </div>
        </div>
    )
}