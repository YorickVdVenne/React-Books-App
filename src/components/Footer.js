import React from 'react';

export default function Footer(props) {

    return (
        <footer>
            <div className="footer-copyright text-center py-5">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/YorickVdVenne"> Yorick Van de Venne </a>
            </div>
        </footer>
    );
}
