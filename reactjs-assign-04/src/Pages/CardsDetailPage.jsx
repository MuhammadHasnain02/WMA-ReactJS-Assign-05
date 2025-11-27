import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigation = useNavigate()

    useEffect(() => {
        
        const timer = setTimeout(() => {
            
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));

        }, 400);

    }, [id]);

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

    if (!post) {
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

  return (
    <div className="flex flex-col px-70 py-10 text-white space-y-4">
        
        {/* Post Number Badge */}
        <div className="text-white rounded-full font-bold text-md">
            Post# {post.id}
        </div>

        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-lg opacity-90">{post.body}</p>

        {/* Rating */}
        <div className="flex justify-between my-5">
            <div>
                <i className="fa-solid fa-circle-user text-[28px] mr-3"></i>
                <span className="font-semibold">- - -</span>
            </div>
            <div className="space-x-1">
                {renderStars(Math.random() * 7)}
            </div>
        </div>

        <div>
            <button onClick={() => navigation('/')}
                className="flex items-center gap-4 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full shadow-md 
                hover:bg-blue-700 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <i className="fa-solid fa-arrow-left"></i>
                Go Back To Posts
            </button>
        </div>

    </div>
  );
}

export default PostDetail;
