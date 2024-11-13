import { React } from 'react';
import './Projects.css';
import Project from './Project';

function ShowProjects(){
    const project1 = {"name": "Visitor Mangament"};
    console.log(project1.name);
    return (
        <section>
            <h1 class="header-title"> Projects </h1> 

            <div class="project-container">
                <Project projectInfo={project1} />
                <div class="project">
                    <div class="project-image">
                        <img src="icons/Sign_in.png" alt="Visitor Management Icon" class="icon-img" /> 
                    </div>
                    <div class="project-words">
                        <h3>Visitor Management Log</h3> 
                        <p class="project-desc">
                            <strong>Made With:</strong> React, Python, Flask, CSS
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> The Visitor Management System is a web application developed using React for the frontend, Python with Flask for the backend, and Excel for data storage. It provides a streamlined process for visitors to sign in, generate a visitor badge, and sign out upon departure. The system maintains visitor records in an Excel spreadsheet, updating entries dynamically as visitors sign in and out.
                        </p>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="icons/to_do.jpg" alt="Checklist picture" class="icon-img" />
                    </div>
                    <div class="project-words">
                        <h3>Checklist App</h3>
                        <p class="project-desc">
                            <strong>Made With:</strong> React
                        </p>
                        <p class="project-desc">
                            <strong>Status:</strong> In progress
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> 
                            The Application alsows users to create Checklists
                            for various reasons like for shopping lists or a To
                            Do list. Users can make and manage their lists and
                            add and manage each item on the lsit.
                        </p>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="icons/books.png" alt="Book Icon" class="icon-img" /> 
                    </div>
                    <div class="project-words">
                        <h3>Book Inventory Database</h3> 
                        <p class="project-desc">
                            <strong>Made With:</strong> PHP, HTML, CSS, SQL
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> In collaboration with my team for a database management systems class, we developed a comprehensive book inventory system. This web application enables users to securely log in, manage their reading lists by creating, deleting, viewing, and adding to them, rate and review books, and form reading groups with shared lists. Additionally, users have the capability to invite new members to their groups, enhancing collaborative reading experiences.
                        </p>
                        <a href="https://github.com/nbubencik/BookInventory1" target="_blank"  class="project-desc">
                            <strong>See Code</strong>
                        </a>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="icons/106_portfolio.png" alt="Portfolio Icon" class="icon-img" /> 
                    </div>
                    <div class="project-words">
                        <h3>The Joy of Programming Portfolio</h3> 
                        <p class="project-desc">
                            <strong>Made With:</strong>HTML, CSS, Javascript
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> This website was built using HTML and CSS to showcase a collection of JavaScript programs I developed during my Joy of Programming course. It includes individual pages dedicated to displaying these programs, a final project page, as well as a home page and an about me page.
                        </p>
                        <a href="https://github.com/nbubencik/nbubencik.github.io" target="_blank"  class="project-desc">
                            <strong>See Code</strong>
                        </a>
                        <a href="https://nbubencik.github.io/" target="_blank"  class="project-desc">
                            <strong>See Portfolio</strong>
                        </a>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="icons/bank.png" alt="Bank Icon" class="icon-img" /> 
                    </div>
                    <div class="project-words">
                        <h3>Money Management</h3> 
                        <p class="project-desc">
                            <strong>Made With:</strong> Python, Flask
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> For our software engineering project, our team developed a Python Flask application with integrated frontend components. The application features user-friendly pages allowing users to view account balances, make deposits or withdrawals, manage loans with payoff timelines, and visualize spending trends through graphs.
                        </p>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="icons/loan.png" alt="Loan Icon" class="icon-img" />  
                    </div>
                    <div class="project-words">
                        <h3>Studnet Loan Payoff Calculator</h3>
                        <p class="project-desc">
                            <strong>Made With:</strong> Python
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> This tool allows users to input their student loan information, including total amounts and interest rates. Users can choose their preferred repayment method and specify their contribution amount for each payment. The application generates a detailed repayment schedule, showing the timeline for paying off each loan and the date when each loan will be fully settled.
                        </p>
                        <a href="https://github.com/nikkiBubencik/loan_calculator" target="_blank"  class="project-desc">
                            <strong>See Code</strong>
                        </a>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="icons/plagerism.png" alt="Plagerism Icon" class="icon-img" />    
                    </div>
                    <div class="project-words">
                        <h3>Plagerism Checker</h3> 
                        <p class="project-desc">
                            <strong>Made With:</strong> C++
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> Collaborated with my team to create a plagerism checker that compares the execution time for the Rabin-Karp and Boyer-Moore algorithms. User can input the sepecified text and pattern files. If the plagerism percentage exceeds 70%  the user is alerted.
                        </p>
                        <a href="https://github.com/nathyntran/CSC-212_Final_Project" target="_blank"  class="project-desc">
                            <strong>See Code</strong>
                        </a>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="Tic_tac_toe.png" alt="Tic Tac Toe picture" class="icon-img" />
                    </div>
                    <div class="project-words">
                        <h3> Tic Tac Toe </h3> 
                        <p class="project-desc">
                            <strong>Made With:</strong> Python
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> This Tic Tac Toe game provides a classic 2-player experience where each player takes turns marking spots on a 3x3 grid. The objective is to be the first player to achieve 3 marks in a row (horizontally, vertically, or diagonally) or to fill the entire board without achieving a win condition, resulting in a draw.
                        </p>
                        <a href="https://github.com/nikkiBubencik/nikkiBubencik.github.io/blob/dashboard/python_code/tic_tac_toe.py" target="_blank"  class="project-desc"><strong>See Code</strong></a>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="rockpaperscissors.png" alt="Rock Paper Scissors picture" class="icon-img" />
                    </div>
                    <div class="project-words">
                        <h3> Rock Paper Scissors</h3>
                        <p class="project-desc">
                            <strong>Made With:</strong> Python
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> This Rock Paper Scissors game is implemented in Python and allows the player to compete against a computer opponent. The player selects their choice between rock, paper, or scissors, and the computer randomly selects its choice. The winner of each round is determined based on the classic rules of the game.
                        </p>
                        <a href="https://github.com/nikkiBubencik/nikkiBubencik.github.io/blob/dashboard/python_code/rock_paper_scissors.py" target="_blank"  class="project-desc">
                            <strong>See Code</strong>
                        </a>
                    </div>
                </div>
                <div class="project">
                    <div class="project-image">
                        <img src="snake.png" alt="Snake game picture" class="icon-img" />
                    </div>
                    <div class="project-words">
                        <h3> Snake</h3> 
                        <p class="project-desc">
                            <strong>Made With:</strong> Python
                        </p>
                        <p class="project-desc">
                            <strong>Description:</strong> This Snake Game is built using the Pygame library in Python. It offers a classic arcade experience where players control a snake to eat food and grow longer while avoiding collisions with the walls and the snake's own body. This game has two different version easy or a hard mode where the snake moves faster around the board.
                        </p>
                        <a href="https://github.com/nikkiBubencik/nikkiBubencik.github.io/blob/dashboard/python_code/Snake.py" target="_blank"  class="project-desc">
                            <strong>See Code</strong>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowProjects;