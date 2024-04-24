# Habitat

[Live Link] (https://habitat-hospitality.web.app/)

### About Habitat:
Habitat is a web application designed to simplify the process of finding and booking accommodations for travelers. Whether you're looking for luxurious hotels, convenient motels, scenic resorts, or charming vacation rentals, Habitat offers a diverse range of lodging options tailored to your needs.

### Technologies Used:
- React.js
- Fairebase Authentication 
- React Router for routing
- Daisyui
- Tailwindcss


## Features

- User Authentication: Users can register, log in, and securely authenticate to access personalized features.
- Profile Management: Users can update their profiles, including personal information and preferences.
- Accommodation Listings: Explore detailed listings for hotels, motels, resorts, and vacation rentals, including descriptions, amenities, and photos.
- Booking System: Seamlessly book accommodations directly through the platform, with options for date selection and payment processing.
- Search Functionality: Utilize search filters to find accommodations based on category.
- Responsive Design: Enjoy a seamless user experience across various devices, including desktops, tablets, and mobile phones.


### API Reference


### Feedback API
| Parameter  | Description                |
| :--------  | :------------------------- |
| `id`  | Unique identifier for the book |
| `name`  |  Name of the user submitting the feedback. |
| `title`  |  Title or subject of the feedback. |
| `feedback`  | Content of the feedback provided by the user. |

### Hotel Category List API

| Parameter  | Description                |
| :--------  | :------------------------- |
| `id`  |  Unique identifier for the hotel category. |
| `name`  | Name of the hotel. |
| `category`  | Category of the hotel (e.g., luxury, budget). |
| `image`  | URL of an image representing the hotel category. |

### Hotel Details API

- id: Unique identifier for the hotel.
- estate_title: Title of the hotel.
- segment_name: Segment or category of the hotel.
- description: Description of the hotel.
- price: Price per night for the hotel.
- status_area: Area size of the hotel.
- location: Location of the hotel.
- image: URL of the hotel image.
- facilities: List of facilities available at the hotel.
- amenities: List of amenities available at the hotel.
- room_types: List of room types available at the hotel, including name and image.
- activities: List of activities available at or nearby the hotel.
- dining_options: List of dining options available at the hotel.
- transportation: List of transportation options available at the hotel.
