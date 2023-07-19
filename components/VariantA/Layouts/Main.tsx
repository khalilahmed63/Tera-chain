import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import NavigationHeader from './NavigationHeader'

export default function Main(props : any) {
    return (
        <div>
        <NavigationHeader />
        <div className="min-h-screen max-w-screen-2xl mx-auto px-5 md:px-10">
            {props.children}
        </div>
        <Footer />
    </div>
    )
}
