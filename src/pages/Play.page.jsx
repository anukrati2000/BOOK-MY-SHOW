import React from 'react';
import MovielayoutHOC from '../layout/Movie.layout';

//Components
import Poster from '../components/Poster/Poster.Component';
import PlayFilters from '../components/PlayFilters/PlayFilters.Component';

const PlayPage = () => {

    return (
        <>
            <div className='container mx-auto px-4 my-10'>
                <div className='w-full flex flex-col-reverse lg:flex lg:flex-row-reverse gap-4'>
                    <div className='lg:w-3/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Plays in NCR Delhi</h2>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                                    title="So Rude of Me by Swati Sachdeva"
                                    subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                                />
                            </div>

                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                                    title="So Rude of Me by Swati Sachdeva"
                                    subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                                />
                            </div>

                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-rajat-chauhan-live-0-2021-9-21-t-19-11-48.jpg"
                                    title="So Rude of Me by Swati Sachdeva"
                                    subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                                />
                            </div>

                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                                    title="So Rude of Me by Swati Sachdeva"
                                    subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                                />
                            </div>

                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                                    title="So Rude of Me by Swati Sachdeva"
                                    subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                                />
                            </div>

                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                                    title="So Rude of Me by Swati Sachdeva"
                                    subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                        <div>
                            <PlayFilters title='Date' tags={["Today", "Tomorrow", "This Weekend"]} />
                        </div>
                        <div>
                            <PlayFilters title='Language' tags={["English", "Hindi", "Tamil"]} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovielayoutHOC(PlayPage);