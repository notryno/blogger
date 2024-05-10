import React, { useState } from 'react';
import homeimage from '../../assets/homeimage.jpg';
import homeimageprofile from '../../assets/homeimage2.jpg';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { GoReply } from "react-icons/go";


const UserBlogs = () => {
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [comments, setComments] = useState([
        { id: 1, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 2, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 3, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 4, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 5, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 6, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 7, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 1, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 2, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 3, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 4, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 5, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 6, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 7, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 1, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 2, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 3, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 4, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 5, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 6, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },
        { id: 7, userimage: homeimageprofile, username: "hunter", text: "Really insightful post, thanks for sharing!", likevotes: 3, unlikevotes: 12 },

    ]);
    const handleCommentButtonClick = () => {
        setShowCommentModal(true);
    };

    const handleCloseModal = () => {
        setShowCommentModal(false);
    };

    const handleVote = (id, delta) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                return { ...comment, likevotes: comment.likevotes + delta };
            }
            return comment;
        });
        setComments(updatedComments);
    };
    return (
        <div className=''>
            <div className="relative w-[80rem] h-[45rem] m-auto mt-[5rem]">
                <img src={homeimage} alt="" className="object-cover w-full h-full" />
                <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 text-8xl font-serif">
                    This is the glorious place of the world
                </div>
            </div>
            <div className="text-center mt-4">
                <div>Photo blogs by the <span className='text-green-600'>Author</span>, presented at the Bloggit!</div>

            </div>
            <div className='  w-[40rem] m-auto pt-20 '>
                <div className='text-left font-bold text-6xl '>

                    This is the glorious place of the world
                </div>
                <div className='bg-[#cfeccf] hover:bg-[#a3d0a2] text-[#6b6b6b] font-semibold text-2xl mt-8'>
                    So,  here we have visited the respective plaece in this summar avopj ads onioasd foi 9 ilkadfh oj a oidf ohiad foha dof foiasdf oaidhf oia
                </div>
                <div>
                    <div className='mt-4 py-8'>
                        <div className="flex justify-start items-start">
                            <img src={homeimageprofile} alt="userprofile" className="w-14 h-14 rounded-full mt-6 " />
                            <div className=' mt-4 pl-4'>
                                <div className='text-2xl font-thin '>
                                    <b> The Author</b>
                                </div>
                                <div className='text-xl font-thin'>
                                    <b className='text-[#b2b2b2]'>

                                        January 20, 2024
                                    </b>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='flex justify-around  border-gray-200 border-y-2 p-3'>
                        <div className='flex  items-center'>

                            <FaArrowUp />
                            <span className='px-2'>25k</span>
                        </div>
                        <div className='flex  items-center'>
                            <FaArrowDown />
                            <span className='px-2'>25k</span>

                        </div>
                        <div className='flex  items-center'>
                            <FaComment onClick={handleCommentButtonClick} className='cursor-pointer' />
                            <span className='px-2'>25k</span>

                        </div>

                    </div>
                    <div className='py-20'>
                        <p className='text-xl font-serif'>

                            Embarking on an adventure is akin to delving into the unknown, where each step taken unveils a new layer of excitement and possibility.
                            It's a journey filled with anticipation, where the heart races with the thrill of discovery and the mind is consumed by the allure of what lies ahead.
                            Whether it's traversing rugged mountain trails, navigating dense jungles, or exploring vast expanses of desert, adventure beckons with promises of adrenaline-fueled experiences
                            and moments of awe-inspiring beauty.
                            <br />
                            <br />

                            In the midst of adventure, one finds themselves immersed in the raw essence of nature, surrounded by breathtaking landscapes that evoke a sense of wonder and humility.
                            Every sunrise brings with it the promise of a new beginning, while every sunset paints the sky in hues of gold and crimson, casting a spell of enchantment over the weary traveler.
                            From the whispering winds atop towering peaks to the gentle rustle of leaves in ancient forests, the natural world becomes both playground and sanctuary, offering solace to the restless
                            soul and inspiration to the wandering spirit.
                            <br />
                            <br />
                            Yet, adventure is not merely about the places visited or the sights seen; it's about the transformation that occurs within oneself along the way. It's about pushing past perceived
                            limits, confronting fears, and embracing the unknown with open arms. In the face of adversity, one discovers resilience and strength they never knew they possessed, while moments of
                            awe and wonder ignite a fire of passion and curiosity that burns bright within the soul. Adventure, then, becomes not just a journey of exploration, but a profound and deeply personal
                            odyssey of self-discovery and growth.
                            As the adventure unfolds, there's an undeniable sense of liberation that comes from breaking free from the constraints of routine and familiarity. Each footfall resonates with a sense
                            of independence and self-reliance, as the traveler charts their own course through the vast expanse of the unknown. With each passing mile, the burdens of everyday life seem to fade away,
                            replaced by a newfound sense of freedom and possibility. In this boundless realm of exploration, the possibilities are endless, and every twist and turn of the journey holds the promise of
                            new experiences and unexpected encounters.
                            <br />
                            <br />
                            Yet, amidst the exhilaration of the journey, there also lies a profound sense of introspection and introspection. In the solitude of nature's embrace, the mind finds solace and clarity,
                            allowing for moments of deep reflection and contemplation. It's a time to ponder life's mysteries, to grapple with the complexities of existence, and to connect with the deeper truths that
                            lie buried within the soul. As the outside world fades into the background, one finds themselves drawn inward, exploring the depths of their own consciousness and coming to terms with the
                            intricacies of their own humanity.
                            <br />
                            <br />
                            Moreover, adventure is a shared experience, one that fosters connections and forges bonds that transcend boundaries of geography and culture. Whether it's swapping stories around a campfire
                            with fellow travelers or sharing a moment of camaraderie with locals in a far-flung village, the journey is enriched by the relationships formed along the way. In these fleeting encounters,
                            strangers become friends, and the world becomes a little smaller as barriers of language and culture are bridged by the universal language of human connection.
                            <br />
                            <br />
                            In the end, the true essence of adventure lies not in the destinations reached or the challenges overcome, but in the memories forged and the lessons learned along the way. It's a journey
                            of self-discovery, a quest for meaning and purpose that leads us to the very edges of our comfort zones and beyond. In the tapestry of life, each adventure is but a thread, weaving its way
                            through the fabric of our existence and leaving an indelible mark on the soul.
                        </p>
                    </div>
                    <div className='flex justify-around  border-gray-200 border-y-2 p-3 '>
                        <div className='flex  items-center'>

                            <FaArrowUp />
                            <span className='px-2'>25k</span>
                        </div>
                        <div className='flex  items-center'>
                            <FaArrowDown />
                            <span className='px-2'>25k</span>

                        </div>
                        <div className='flex  items-center'>

                            <FaComment onClick={handleCommentButtonClick} />
                            <span className='px-2'>25k</span>

                        </div>

                    </div>

                </div>

            </div>
            <div className='bg-gray-300 mt-40 pb-8'>
                <div className='w-[50rem] m-auto pt-14 flex justify-around'>
                    <div>


                        <img src={homeimageprofile} alt="userprofile" className="w-24 h-24 rounded-full  " />
                        <div className='text-3xl mt-4 font-bold'>
                            Post By  Author
                        </div>
                    </div>
                    <div>
                        <div className='text-green-800 font-extrabold text-4xl'>
                            1000
                        </div>
                        <div className='mt-[rem] text-xl font-bold text-gray-600'>
                            Popularity points
                        </div>
                        <div className='flex flex-col mt-8'>
                            <div className='text-xl font-bold'>
                                Editor of the blog
                            </div>
                            <div className='text-gray-600 font-bold'>
                                This is the glorious place of the world
                            </div>
                        </div>
                    </div>
                </div>

            </div>{showCommentModal && (
                <div className="fixed inset-0 top-0 right-0 bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 w-full md:w-[40rem] left-0 h-screen shadow-lg">
                        <div className='flex justify-end'>
                            <button className="" onClick={handleCloseModal}>
                                <FaTimes />
                            </button>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 ">Comments</h2>
                        <textarea
                            placeholder="Write your response..."
                            className="border-2 border-gray-500 outline-none p-2 mb-4 w-full h-32 resize-none shadow-xl shadow-gray-500 rounded-2xl "
                        ></textarea>
                        {/* Sorting Dropdown */}
                        <select className="border-2 border-gray-500 focus:outline-none p-2 mb-4 w-full">
                            <option value="relevant">Most Relevant</option>
                            <option value="recent">Most Recent</option>
                        </select>
                        <div className='max-h-[30rem] overflow-y-auto'>
                            {comments.map(comment => (
                                <div key={comment.id} className="border-b border-gray-300 py-2 flex items-start space-x-2">
                                    {/* User image */}
                                    <img src={comment.userimage} alt="userprofile" className="w-12 h-12 rounded-full" />
                                    {/* Username and comment text */}
                                    <div>
                                        <p className="mb-2">
                                            <span className="font-semibold">{comment.username}: </span>
                                            {comment.text}
                                        </p>
                                        {/* Like, dislike, and reply buttons */}
                                        <div className="flex items-center space-x-2">
                                            <div className='flex items-center space-x-2'>
                                                <FaArrowUp onClick={() => handleVote(comment.id, 1)} />
                                                <span>{comment.likevotes}</span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <FaArrowDown onClick={() => handleVote(comment.id, -1)} />
                                                <span>{comment.unlikevotes}</span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <FaComment />
                                                <span>1 Reply</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserBlogs;
