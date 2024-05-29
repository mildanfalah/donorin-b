import CONFIG from "../../global/config";

const createUserItemTemplate = (user) => `
    <div class="user-card-container">
        <div class="user-card">
            <div class="user-card-status">
                <p>pendonor</p>
            </div>
            <img class="user-card-image" src="${CONFIG.BASE_IMAGE_URL}?img=${user.id}" alt="${user.firstName} ${user.lastName}"/>
            <div class="user-card-content">
                <h2 class="user-card-name">${user.firstName} ${user.lastName}</h2>
                <div class="user-card-info">
                    <p class="user-card-blood">${user.bloodGroup}</p>
                    <p class="user-card-adress">${user.address.city}</p>
                </div>
                <button type="submit">Ajukan</button>
            </div>
        </div>
    </div>
`;

const createHomeContentTemplate = (content, themeClass, linkId) => `
    <div class="${themeClass}">
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <div class="home-content-button-container">
            <a href="#/${linkId}" class="home-button"><p>${content.button}</p></a>
            <img src="${content.image}"/>
        </div>
    </div>
`;

export { createUserItemTemplate, createHomeContentTemplate };
