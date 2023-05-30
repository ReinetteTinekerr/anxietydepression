
export default function CommentBox({ comment, setComment }: { comment: string, setComment: any }) {
    return <>
        <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="px-4 py-2 bg-white rounded-t-lg ">
                    <label htmlFor="comment" className="sr-only">Your comment</label>
                    <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0 " placeholder="Write a comment..." required></textarea>
                </div>
            </div>
        </form>
    </>
}