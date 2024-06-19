/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import {
  MdStar,
  MdOutlineAccessAlarms,
  MdOutlinePriceChange,
  MdOutlineSubtitles,
} from 'react-icons/md';
import { CiGlobe } from 'react-icons/ci';
import { BsBarChart } from 'react-icons/bs';
import NavB from '../../Nav/NavB';
import VideoPlayer from '../../components/VideoPlayer';
import styles from './css/WelcomePage.module.scss';

const WelcomePage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (course) => {
    setIsOpen(!isOpen);
    setSelectedCourse(course);
  };

  const courses = [
    {
      id: '01',
      img: 'https://via.placeholder.com/150',
      name: 'Fundamentals of Agriculture',
      description: 'This course is designed to introduce students to the basic principles of agriculture. It covers a wide range of topics including soil science, plant science, animal science, and agricultural economics. Students will learn about the importance of agriculture in society and how it impacts our daily lives. The course is suitable for students who are interested in pursuing a career in agriculture or who simply want to learn more about the subject. No prior knowledge of agriculture is required.',
      rating: 4,
      level: 'Beginners Level',
      mode: '100% Online',
      duration: '3 hrs',
      price: 'Free',
    },
    {
      id: '02',
      img: 'https://via.placeholder.com/150',
      name: 'Fundamentals of Sustainable Farming',
      description: 'This course is designed to introduce students to the basic principles of agriculture. It covers a wide range of topics including soil science, plant science, animal science, and agricultural economics. Students will learn about the importance of agriculture in society and how it impacts our daily lives. The course is suitable for students who are interested in pursuing a career in agriculture or who simply want to learn more about the subject. No prior knowledge of agriculture is required.',
      rating: 3,
      level: 'Beginners Level',
      mode: '100% Online',
      duration: '3 hrs',
      price: 'Free',
    },
    {
      id: '03',
      img: 'https://via.placeholder.com/150',
      description: 'This course is designed to introduce students to the basic principles of agriculture. It covers a wide range of topics including soil science, plant science, animal science, and agricultural economics.',
      name: 'Course 3',
      rating: 5,
      level: 'Beginners Level',
      mode: '100% Online',
      duration: '3 hrs',
      price: 'Free',
    },
    {
      id: '04',
      img: 'https://via.placeholder.com/150',
      name: 'Oil Palm Cultivation and Processing',
      description: 'This course is designed to introduce students to the basic principles of agriculture. It covers a wide range of topics including soil science, plant science, animal science, and agricultural economics. Students will learn about the importance of agriculture in society and how it impacts our daily lives. The course is suitable for students who are interested in pursuing a career in agriculture or who simply want to learn more about the subject.',
      rating: 5,
      level: 'Beginners Level',
      mode: '100% Online',
      duration: '7 hrs',
      price: 'Free',
    },
  ];

  return (
    <>
      <NavB />
      <section className={styles.container}>
        <div className={styles.div}>
          <h1 className={styles.title}>Welcome to PalmSchool</h1>
          <p className={styles.subtitle}>Watch the introductory video below!</p>
        </div>
        <VideoPlayer />
        <div className={styles.courses}>
          <h3 className={styles.courseTitle}>Available Courses</h3>
          <div className={styles.courseDiv}>
            {
              courses.map((course) => (
                <div
                  key={course.id}
                  className={styles.course}
                  onClick={() => handleClick(course)}
                >
                  <h2 className={styles.courseId}>{course.id}</h2>
                  <img src={course.img} className={styles.img} alt={course.name} />
                  <h5 className={styles.courseName}>{course.name}</h5>
                  <p className={styles.courseStar}>
                    {Array(5).fill(0).map((_, index) => (
                      <MdStar
                        key={_.id}
                        className={index < course.rating ? styles.filledStar : styles.lightStar}
                      />
                    ))}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        {
          isOpen && (
            <div className={styles.courseDetails}>
              <h3 className={styles.courseDetailsTitle}>Course Details</h3>
              {
                selectedCourse && (
                  <div key={selectedCourse.id} className={styles.courseDetail}>
                    <h2 className={styles.courseDetailId}>{selectedCourse.id}</h2>
                    <h4 className={styles.courseDetailName}>{selectedCourse.name}</h4>
                    <p className={styles.courseDetailDescription}>{selectedCourse.description}</p>
                    <div className={styles.courseDetailInfo}>
                      <p className={styles.courseDetailMode}>
                        <CiGlobe className={styles.courseDetailLabel} />
                        {selectedCourse.mode}
                      </p>
                      <p className={styles.courseDetailLevel}>
                        <BsBarChart className={styles.courseDetailLabel} />
                        {selectedCourse.level}
                      </p>
                      <p className={styles.courseDetailDuration}>
                        <MdOutlineAccessAlarms className={styles.courseDetailLabel} />
                        {selectedCourse.duration}
                      </p>
                      <p className={styles.courseDetailPrice}>
                        <MdOutlineSubtitles className={styles.courseDetailLabel} />
                        English Subtitle
                      </p>
                      <p className={styles.courseDetailPrice}>
                        <MdOutlinePriceChange className={styles.courseDetailLabel} />
                        {selectedCourse.price}
                      </p>
                    </div>
                  </div>
                )
              }
            </div>
          )
        }
      </section>
    </>
  );
};

export default WelcomePage;
