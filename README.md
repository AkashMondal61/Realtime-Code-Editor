\# Collaborative Code Editor Application

This project is a collaborative code editor application that allows multiple users to edit documents in real-time, communicate via chat, and share documents with others. It includes features like document versioning, user authentication, and a user-friendly interface for document management.

\#\# Features

\- Real-time collaborative code editing  
\- User authentication (registration and login)  
\- Chat functionality for smooth communication between collaborators  
\- Document versioning with autosave  
\- Document sharing via shareable links  
\- Access all documents from a dropdown menu  
\- Logout option

\#\# Installation

\#\#\# Prerequisites

\- Node.js (v14 or higher)  
\- npm (v6 or higher)  
\- MongoDB![][image1]

## **Registration and Login**

1. Register a new user by providing a unique username and password.  
1. Login using the registered username and password.

## **Document Editing**

* Once logged in, you can create a new document or open an existing one.  
* Edit the document collaboratively with other users in real-time.

## **Chat Functionality**

* Use the chat box to communicate with other users editing the same document.

## **Document Sharing**

* Click on the "Share" button to get a shareable link for your document.  
* Share the link with others to collaborate on the same document.

## **Saving Documents**

* Click on the "Save" button to save the current version of the document along with all current editor details.  
* Document versions are saved automatically at regular intervals.

## **Accessing All Documents**

* Click on the "All documents" button to open a dropdown menu displaying all your documents.  
* Select a document from the dropdown to open and edit it.

## **Viewing Current Users**

* ## See the list of all current users who are editing the document in the user list section.

## **Logout**

* Click on the "Logout" button to log out from the application.

[image1]: <data:image/png;base64,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Pvpopx435L+eUgzle23hOiH5Cxju/S5kXv6f2pmfZ21zr5G74ivKy/l3NmOXLaPRsFDgoLKFg3xU5ebdF9pd+E+YMCGxvmjdurUWKrcP+cjVbReu75Mv9Lt5OQnm+7FYTV1RmD17tv0uXfgXBRraX2IQub6m/ja5lHWffOyYTyGVj4ndY0nxk4+ew3XyMXHixIzkqwDhur6pU6eaDz/80B6//BzdVd9d+Q5c+PqLXflYXH5+8p1Ox32dQciVuHB9xCVbRqNhocBBEQ4AEC8yGj4KHBThAADxIqPho8BBEQ4AEC8yGj4KHBThAADxIqPho8BBEQ4AEC8yGj4KHBThAADxIqPho8BBEQ4AEC8yGj4KHBThAADxIqPho8BBEQ4AEC8yGj4KHBThAADxIqPho8BBEQ4AEC8yGj4KHBThAADxIqPho8BBEQ4AEC8yGj4KHBThAADxIqPho8BBEQ4AEC8yGj4KHFS2cPjss88Sy5xGjRollgEAak62jEbDQoGDyhYOYYE77rjjTOPGjU1paaktcEVFReb73/++KSsrs7ebNm2q6z799NOmefPmZt999zXt27c3hxxyiF1+xBFH2HXvv/9+O50yZUricQEA2TMaDQsFDipbOEyaNCnttpSt559/3gwZMsSWr/32288u//jjj01hYaE54YQTdN0nn3zS7v/99983I0eONJ07d9aiJ/e3a9fOTn/6058mHhcAkD2j0bBQ4KCyhYNf4FatWmWGDh1qRowYoQVu4MCB5s033zQnnniiXeewww7T9aXArV692nz00Udm/vz5pkuXLvbK3aGHHmrv79atm50effTRiccFAGTPaDQsFDiobOEwbdq0tNtS0MaMGWOnxx57rF324x//2MydO9ccfPDBtuD17t3bLh88eLD9iFU+hl28eLG57bbbbIH77W9/a++/99577fSUU05JPC4AIHtGo2GhwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQLzIaPgocFOEAAPEio+GjwEERDgAQ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>