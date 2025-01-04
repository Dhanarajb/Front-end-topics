# How Companies Ship Code to Production (Cisco Spaces Project Example)

This document explains how code is shipped to production with reference to your Cisco Spaces dashboard project. Each step maps the software development lifecycle (SDLC) process to real-world scenarios from your project.

---

## 1. **Plan**
- **Process**: The Product Owner gathers requirements and creates user stories in tools like Jira.
- **Cisco Spaces Example**:
  - Requirements for the dashboard included features like viewing reports, managing locations, and exporting data (PDF/CSV).
  - User stories created in Jira might include:
    - *"As a user, I want to filter locations by name."*
    - *"As a user, I want to export data from the dashboard as a CSV."*
- **Scenario**: The Product Owner creates stories and assigns them to developers.

---

## 2. **Development**
- **Process**: Developers take stories from Jira, implement the functionality, and commit code to a Git repository.
- **Cisco Spaces Example**:
  - You implemented features like:
    - **LocationModal**: For managing location-specific details.
    - **PDF/CSV Export**: Using `jsPDF` to generate custom table layouts.
  - You wrote code, tested it locally, and committed changes to GitHub.
- **Scenario**: You developed the "Location Filter" feature and pushed it to GitHub.

---

## 3. **Build & Package**
- **Process**: The CI/CD pipeline builds and tests the code, ensuring quality before deployment.
- **Cisco Spaces Example**:
  - **Jenkins** (or a similar tool) automatically built the dashboard code.
  - Quality tools like **SonarQube** ensured:
    - No critical bugs or vulnerabilities.
    - Code met coverage standards (e.g., 80% test coverage).
  - The build was packaged and stored in an artifact repository (e.g., JFrog Artifactory).
- **Scenario**: Jenkins validated the "PDF Export" feature and deployed it to the Dev Environment.

---

## 4. **Test**
- **Process**: QA teams test the code in QA and UAT environments before approving for production.
- **Cisco Spaces Example**:
  - The QA team tested:
    - **Regression Testing**: Ensured the new dashboard didn’t break existing features like the Engagement Table.
    - **Performance Testing**: Checked if the dashboard could handle large datasets (e.g., 10,000+ rows).
  - UAT Testing: Stakeholders verified if features met business requirements.
- **Scenario**: QA validated the "Export Data" feature, ensuring it worked with massive location datasets.

---

## 5. **Release**
- **Process**: Approved features are deployed to the production environment. Monitoring tools are used to ensure stability.
- **Cisco Spaces Example**:
  - The "Canary Deployment" strategy was used:
    - Rolled out the new dashboard to a small subset of users.
    - Used tools like **Prometheus** and **Skywalking** for monitoring errors and API performance.
  - After confirming stability, the feature was made available to all users.
- **Scenario**: The "Location Filter" feature was deployed gradually, monitored for errors, and then fully released.

---

## Summary of Your Role
- You played a key role in:
  - Implementing critical features like **LocationModal**, **Engagement Table**, and **PDF Export**.
  - Ensuring code quality with CI/CD pipelines (e.g., Jenkins, GitHub).
  - Collaborating with QA for thorough testing.
  - Deploying features to production and monitoring them for stability.

This document simplifies the journey from planning to production using your Cisco Spaces project as an example.
