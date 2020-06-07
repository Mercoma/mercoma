import React, { useEffect } from "react";

import { MobileSidebar, Sidebar } from "../../components/Sidebar";
import { doctors } from "../../data/doctorsList";
import DoctorCard from "./DoctorCard";
import Base from "../../layout/Base";

import styles from "./Doctors.module.scss";

export default function Doctors() {
  useEffect(() => {
    document.title = "Mercoma - Doctors";
  }, []);

  return (
    <Base>
      <Sidebar page="doctors" />
      <MobileSidebar />
      <section className={styles.doctorsContent}>
        <h1>Doctors</h1>
        <div className={styles.doctorList}>
          {doctors.map((doctor) => (
            <DoctorCard doctor={doctor} />
          ))}
        </div>
      </section>
    </Base>
  );
}
