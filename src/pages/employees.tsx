import EmployeesHero from "@/components/Employees/EmployeesHero";
import Recruitment from "@/components/Employees/Recruitment";
import Layout from "@/components/layout";
import React from "react";

export default function employess() {
  return (
    <Layout>
      <EmployeesHero />
      <Recruitment />
    </Layout>
  );
}
