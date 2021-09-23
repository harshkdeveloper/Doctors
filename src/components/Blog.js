import React from 'react'
import one from './img/bg_image_1.jpg'
import { NavLink } from 'react-router-dom'
import two from './img/banner-pattern.svg'

const Blog = () => {
    return (
        <>
             <div className="page-banner overlay-dark bg-image" style={{ backgroundImage:`url(${one})` }} >
    <div className="banner-section">
      <div className="container text-center wow fadeInUp">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
            <li className="breadcrumb-item"><NavLink to="index.html">Home</NavLink></li>
            <li className="breadcrumb-item active" aria-current="page">Blog</li>
          </ol>
        </nav>
        <h1 className="font-weight-normal">News</h1>
      </div> 
    </div> 
  </div> 

  <div className="page-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <NavLink to="#">Covid19</NavLink>
                  </div>
                  <NavLink to="blog-details" className="post-thumb">
                    <img src="../assets/img/blog/blog_1.jpg" alt=""/>
                  </NavLink>
                </div>
                <div className="body">
                  <h5 className="post-title"><NavLink to="blog-details.html">List of Countries without Coronavirus case</NavLink></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="../assets/img/person/person_1.jpg" alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 1 week ago
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <NavLink to="#">Dental</NavLink>
                  </div>
                  <NavLink to="blog-details" className="post-thumb">
                    <img src="../assets/img/blog/blog_3.jpg" alt=""/>
                  </NavLink>
                </div>
                <div className="body">
                  <h5 className="post-title"><NavLink to="blog-details.html">What is the impact of eating too much sugar?</NavLink></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="../assets/img/person/person_4.jpg" alt=""/>
                      </div>
                      <span>Wizdom Jack</span>
                    </div>
                    <span className="mai-time"></span> 2 weeks ago
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <NavLink to="#">Covid19</NavLink>
                  </div>
                  <NavLink to="blog-details" className="post-thumb">
                    <img src="../assets/img/blog/blog_3.jpg" alt=""/>
                  </NavLink>
                </div>
                <div className="body">
                  <h5 className="post-title"><NavLink to="blog-details.html">Shifting goalposts: Research in the time of the coronavirus</NavLink></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="../assets/img/person/person_3.jpg" alt=""/>
                      </div>
                      <span>Adams Collier</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <NavLink to="#">Neurology</NavLink>
                  </div>
                  <NavLink to="blog-details" className="post-thumb">
                    <img src="../assets/img/blog/blog_4.jpg" alt=""/>
                  </NavLink>
                </div>
                <div className="body">
                  <h5 className="post-title"><NavLink to="blog-details.html">What are the nonmedical factors most closely linked to death risk?</NavLink></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="../assets/img/person/person_1.jpg" alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <NavLink to="#">Cardiology</NavLink>
                  </div>
                  <NavLink to="blog-details" className="post-thumb">
                    <img src="../assets/img/blog/blog_5.jpg" alt=""/>
                  </NavLink>
                </div>
                <div className="body">
                  <h5 className="post-title"><NavLink to="blog-details.html">Do gut bacteria contribute to ethnic health disparities</NavLink></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="../assets/img/person/person_1.jpg" alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <NavLink to="#">Patient Services</NavLink>
                  </div>
                  <NavLink to="blog-details" className="post-thumb">
                    <img src="../assets/img/blog/blog_1.jpg" alt=""/>
                  </NavLink>
                </div>
                <div className="body">
                  <h5 className="post-title"><NavLink to="blog-details.html">The Recovery Room: News beyond the pandemic</NavLink></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="../assets/img/person/person_1.jpg" alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 1 month ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <NavLink to="#">General Health</NavLink>
                  </div>
                  <NavLink to="blog-details" className="post-thumb">
                    <img src="../assets/img/blog/blog_2.jpg" alt=""/>
                  </NavLink>
                </div>
                <div className="body">
                  <h5 className="post-title"><NavLink to="blog-details.html">Racism in mental healthcare: An invisible barrier</NavLink></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="../assets/img/person/person_1.jpg" alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 2 months ago
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <NavLink to="#">Covid19</NavLink>
                  </div>
                  <NavLink to="blog-details" className="post-thumb">
                    <img src="../assets/img/blog/blog_2.jpg" alt=""/>
                  </NavLink>
                </div>
                <div className="body">
                  <h5 className="post-title"><NavLink to="blog-details.html">COVID-19 live updates: Total number of cases passes 11.6 million</NavLink></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src="../assets/img/person/person_2.jpg" alt=""/>
                      </div>
                      <span>Diego Simmons</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 my-5">
              <nav aria-label="Page Navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <NavLink className="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</NavLink>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <NavLink className="page-link" to="#">1 <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink className="page-link" to="#">2</NavLink>
                  </li>
                  <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
                  <li className="page-item">
                    <NavLink className="page-link" to="#">Next</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div> 
        </div>
        <div className="col-lg-4">
          <div className="sidebar">
            <div className="sidebar-block">
              <h3 className="sidebar-title">Search</h3>
              <form action="#" className="search-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter"/>
                  <button type="submit" className="btn"><span className="icon mai-search"></span></button>
                </div>
              </form>
            </div>
            <div className="sidebar-block">
              <h3 className="sidebar-title">Categories</h3>
              <ul className="categories">
                <li><NavLink to="#">Food <span>12</span></NavLink></li>
                <li><NavLink to="#">Dish <span>22</span></NavLink></li>
                <li><NavLink to="#">Desserts <span>37</span></NavLink></li>
                <li><NavLink to="#">Drinks <span>42</span></NavLink></li>
                <li><NavLink to="#">Ocassion <span>14</span></NavLink></li>
              </ul>
            </div>

            <div className="sidebar-block">
              <h3 className="sidebar-title">Recent Blog</h3>
              <div className="blog-item">
                <NavLink className="post-thumb" to="">
                  <img src="../assets/img/blog/blog_1.jpg" alt=""/>
                </NavLink>
                <div className="content">
                  <h5 className="post-title"><NavLink to="#">Even the all-powerful Pointing has no control</NavLink></h5>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-calendar"></span> July 12, 2018</NavLink>
                    <NavLink to="#"><span className="mai-person"></span> Admin</NavLink>
                    <NavLink to="#"><span className="mai-chatbubbles"></span> 19</NavLink>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <NavLink className="post-thumb" to="">
                  <img src="../assets/img/blog/blog_2.jpg" alt=""/>
                </NavLink>
                <div className="content">
                  <h5 className="post-title"><NavLink to="#">Even the all-powerful Pointing has no control</NavLink></h5>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-calendar"></span> July 12, 2018</NavLink>
                    <NavLink to="#"><span className="mai-person"></span> Admin</NavLink>
                    <NavLink to="#"><span className="mai-chatbubbles"></span> 19</NavLink>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <NavLink className="post-thumb" to="">
                  <img src="../assets/img/blog/blog_3.jpg" alt=""/>
                </NavLink>
                <div className="content">
                  <h5 className="post-title"><NavLink to="#">Even the all-powerful Pointing has no control</NavLink></h5>
                  <div className="meta">
                    <NavLink to="#"><span className="mai-calendar"></span> July 12, 2018</NavLink>
                    <NavLink to="#"><span className="mai-person"></span> Admin</NavLink>
                    <NavLink to="#"><span className="mai-chatbubbles"></span> 19</NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-block">
              <h3 className="sidebar-title">Tag Cloud</h3>
              <div className="tagcloud">
                <NavLink to="#" className="tag-cloud-link">dish</NavLink>
                <NavLink to="#" className="tag-cloud-link">menu</NavLink>
                <NavLink to="#" className="tag-cloud-link">food</NavLink>
                <NavLink to="#" className="tag-cloud-link">sweet</NavLink>
                <NavLink to="#" className="tag-cloud-link">tasty</NavLink>
                <NavLink to="#" className="tag-cloud-link">delicious</NavLink>
                <NavLink to="#" className="tag-cloud-link">desserts</NavLink>
                <NavLink to="#" className="tag-cloud-link">drinks</NavLink>
              </div>
            </div>

            <div className="sidebar-block">
              <h3 className="sidebar-title">Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div> 
      </div> 
    </div> 
  </div> 

  <div className="page-section banner-home bg-image" style={{ backgroundImage:`url(${two})` }} >
    <div className="container py-5 py-lg-0">
      <div className="row align-items-center">
        <div className="col-lg-4 wow zoomIn">
          <div className="img-banner d-none d-lg-block">
            <img src="../assets/img/mobile_app.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-8 wow fadeInRight">
          <h1 className="font-weight-normal mb-3">Get easy access of all features using One Health Application</h1>
          <NavLink to="#"><img src="../assets/img/google_play.svg" alt=""/></NavLink>
          <NavLink to="#" className="ml-2"><img src="../assets/img/app_store.svg" alt=""/></NavLink>
        </div>
      </div> 
    </div> 
  </div> 
        </>
    )
}

export default Blog
