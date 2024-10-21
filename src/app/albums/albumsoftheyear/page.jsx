"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const router = useRouter();

    const album = {
        charom: {
            fig: 'KITE - VII Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/a1502820388_65_720x.jpg?v=1723577755',
            span1: 'September 19, 2024',
            span2: '',
            p: 'The Scandinavian synth-wave duo composed of Nicklas Stenemo and Christian Hutchinson Berg aka Kite have gifted us with countless singles and ...',
        },
        panjom: {
            fig: 'LABYRINTHUS STELLARUM - "Vortex Of The Worlds" Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/1200x1200bb_720x.jpg?v=1721242337',
            span1: 'November 15, 2024',
            span2: '',
            p: 'Ukrainian cosmic black metal band Labyrinthus Stellarum, who entered the scene with Tales of the Void, have recently released their second f...',
        },
        hashtom: {
            fig: 'ABRICTION - "Banshee" Album Review',
            img: 'https://londonworks.com/cdn/shop/articles/a3550408342_65_720x.jpg?v=1708085330',
            span1: 'December 2, 2024',
            span2: '',
            p: 'Abriction is the shoegaze/atmospheric black metal project ran by Meredith Salvatori, a very prolific American artist known for her filtered po...',
        },
    };

    const handleFilterChange = (event) => {
        const { value } = event.target;
        router.push(value);
    }
    return (
        <div className='w-[85%] justify-center content-center flex flex-wrap py-10 mx-auto'>
            <h2 className='text-[25px] content-center items-center'>LONDONWORKS lifestyle, art and music blog.</h2>
            <div className='my-10 mt-10 flex w-full justify-center *:mx-4'>
                <span className='h-full content-center'>filter by</span>
                <select
                    id="BlogTagFilter"
                    aria-describedby="a11y-refresh-page-message"
                    className='border-black border p-2'
                    onChange={handleFilterChange}
                >
                    <option value="/albums/albumsoftheyear">album of the year</option>
                    <option value="/albums">All topics</option>
                    <option value="/albums/blog">blog</option>
                    <option value="/albums/music">music</option>
                </select>
            </div>
            <div className='w-full flex flex-wrap *:lg:w-[33.33%] *:w-[85%] justify-center lg:justify-between *:p-5 content-center mb-20'>
                <Albumm album={album} />
            </div>
        </div>
    );
}

function Albumm({ album }) {
    return (
        <>
            {Object.keys(album).map((key, index) => (
                <figure className=' '>
                    <img
                        src={album[key].img}
                        className='w-full object-cover cursor-pointer'
                        alt={album[key].fig}
                    />
                    <figcaption className='text-[20px] my-4'>
                        {album[key].fig}
                    </figcaption>
                    <span className='text-[13px]'>{album[key].span1}</span>
                    <p className='my-5 text-[rgb(105,114,123)] text-[13px]'>
                        {album[key].p}
                    </p>
                    <div className='text-[13px] flex my-5 *:mr-4 *:underline'>
                        <Link href={'/albums/albumsoftheyear'} >
                            album of the year
                        </Link>

                        <Link href={'/albums/blog'} >
                            blog
                        </Link>

                        <Link href={'/albums/music'} >
                            music
                        </Link >
                        <Link href={'/albums'} >
                            all
                        </Link >
                    </div >
                    <span className='uppercase border px-4 py-2 border-black text-[14px] cursor-pointer'>
                        read more
                    </span>
                </figure >
            ))
            }

        </>
    );
}
