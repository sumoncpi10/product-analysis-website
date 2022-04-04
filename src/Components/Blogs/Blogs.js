import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>
            {/* QSN-1 */}
            <div>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title">What is Semantic tag?</h5>
                                <p class="card-text">A semantic element clearly describes its meaning to both the browser and the developer. We use semantic elements because its easy to read. It has greater accessibility. Semantic elements also lead to more consistent code. here is new version in html5. some Semantic tag is 'article, aside, header, nav, section, summary' etc.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title"> What is Context API?</h5>
                                <p class="card-text">This is a React Structure. This can Store state directly in the common ancestor component. Context API  that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. When developing a React app, the primary situations where the React Context API really shines. Use a library like Redux or MobX to manage state for you. </p>
                            </div>
                        </div>
                    </div>



                </div>



            </div>


        </div>
    );
};

export default Blogs;