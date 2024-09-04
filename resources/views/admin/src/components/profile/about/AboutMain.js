"use client"
import React, { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import About from './About';
import AboutEdit from './AboutEdit';
import AboutTable from './AboutTable';

export default function AboutMain() {
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleEditClick = (id) => {
        setIsEditing(true);
        setEditId(id);
    };

    return (
        <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                {isEditing ? (
                                    <AboutEdit id={editId} setIsEditing={setIsEditing} />
                                ) : (
                                    <About />
                                )}
                                <AboutTable onEditClick={handleEditClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}