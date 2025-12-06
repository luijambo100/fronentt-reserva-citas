import React from "react";

export default function Home({ user }) {
    return (
        <div className="home-background">
            <div className="home-container">

                {/* VIDEO A LA IZQUIERDA */}
                <div className="home-video">
                    <video autoPlay loop muted>
                        <source src="/video/VIDEO-DOC.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* BIENVENIDA A LA DERECHA */}
                <div className="home-welcome">
                    <h1>Bienvenida, {user.name}</h1>
                    <p className="welcome-desc">
                        Eres el filtro y el conector de toda la clínica. La información fluye gracias a tu atención y profesionalismo. ¡Ten una excelente Día!".
                    </p>

                    <input 
                        type="date"
                        className="welcome-calendar"
                    />
                </div>

            </div>
        </div>
    );
}