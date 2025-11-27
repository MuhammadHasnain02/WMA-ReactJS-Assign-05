import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

function CardsPage() {
    const [posts , setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [totalPost, settotalPost] = useState(9);

    useEffect(() => {

        const timer = setTimeout(() => {

            let url = 'https://jsonplaceholder.typicode.com/posts'
            
            fetch(url).then((response) => response.json()).then((data) => {
                setPosts( data.slice(0, totalPost) )
                setIsLoading(false)
            })

        }, 700);

    } , [totalPost])

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <RotatingLines
                    visible={true}
                    height="70"
                    width="70"
                    color="white"
                    strokeWidth="5"
                    animationDuration="1"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        )
    }

    const renderStars = (count) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
        stars.push(
            <i
            key={i}
            className={`fa-solid fa-star text-[14px] ${
                i < count ? "text-yellow-400" : "text-gray-300"
            }`}
            ></i>
        );
        }
        return stars;
    };

    return (
        <section className="flex flex-col items-center px-5 md:px-20">

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {posts.map((post) => (
                    <Link to={`/post/${post.id}`} key={post.id} className="h-full">
                        <div key={post.id} className="relative flex flex-col justify-between bg-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer transition duration-400 hover:scale-[1.02] h-full">
                        
                            {/* Post Number Badge */}
                            <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                                Post# {post.id}
                            </div>

                            {/* Post Title */}
                            <h2 className="text-xl font-bold mt-10 text-gray-800">{post.title}</h2>

                            {/* Rating */}
                            <div className="flex justify-between my-5">
                                <div>
                                    <i className="fa-solid fa-circle-user text-2xl mr-2"></i>
                                    <span className="font-semibold">- - -</span>
                                </div>
                                <div className="space-x-1">
                                    {renderStars(Math.random() * 7)}
                                </div>
                            </div>

                            <div className="flex gap-12">
                                {/* Read More Button */}
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 w-full font-semibold">
                                    Read More
                                </button>

                                {/* Action Icons */}
                                <div className="flex items-center gap-4 text-gray-500 text-lg">
                                    <i className="fa-solid fa-heart hover:text-red-500 cursor-pointer transition"></i>
                                    <i className="fa-solid fa-comment hover:text-blue-500 cursor-pointer transition"></i>
                                    <i className="fa-solid fa-share hover:text-green-500 cursor-pointer transition"></i>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}

            </div>

            <button onClick={() => settotalPost(totalPost + 5)} 
            className="border border-gray-400 mt-15 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-80 px-5 py-2.5 cursor-pointer transition duration-400 hover:scale-105">Load More</button>

        </section>
    )

}


export default CardsPage