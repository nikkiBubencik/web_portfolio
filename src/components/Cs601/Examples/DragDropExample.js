import { useState, useEffect, useRef } from "react";
import './DragDrop.css';

function DragDropExample() {
    const [dragItems, setDragItems] = useState([]);
    const [ errorMessage, setErrorMessage] = useState('');

    const livingDropZoneRef = useRef(null);
    const nonLivingDropZoneRef = useRef(null);

    const handleDragOver = (e, dropzone) => {
        e.preventDefault();
        dropzone.style.border = "1px dotted black";
    };

    const handleDragLeave = (e, dropzone) => {
        e.preventDefault();
        dropzone.style.border = "1px solid black";
    };

    const handleDrop = (e, dropzone, id) => {
        e.preventDefault();
        dropzone.style.border = "1px solid black";

        const itemTag = e.dataTransfer.getData('category');
        const itemId = e.dataTransfer.getData('text/plain');
        const item = document.getElementById(itemId);

        if ((itemTag === 'living' && id === 'living') ||
            (itemTag === 'non-living' && id === 'non-living')) {
            dropzone.appendChild(item);
        } else {
            console.log('Wrong item, wrong category!');
            setErrorMessage("Wrong Category");
        }
    };

    useEffect(() => {
        // Async function to fetch and process the data
        async function fetchData() {
            const response = await fetch('data/categories.json');
            const data = await response.json();
            return data;
        }

        // Function to mix data
        function mixData(data) {
            const allData = [...data.living, ...data.nonLiving];
            // Randomly sort data
            const mixedData = [];
            allData.forEach(item => {
                const index = Math.floor(Math.random() * mixedData.length);
                mixedData.splice(index, 0, item);
            });
            setDragItems(mixedData);
        }

        // Fetch data and mix it
        fetchData().then(data => {
            mixData(data);
        });

    }, []);

    useEffect(() => {
        const showData = document.getElementById('json-data');
        showData.innerHTML = '';

        dragItems.forEach(item => {
            const showItem = document.createElement("p");
            showItem.draggable = true;
            showItem.textContent = item.name;
            showItem.id = item.id;
            showItem.className = "drag-item-card";
            showData.appendChild(showItem);

        showItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.id);
            e.dataTransfer.setData('category', item.category);
            setErrorMessage("");
        });
        });
    }, [dragItems]);

    useEffect(() => {

        const zones = [
            { ref: livingDropZoneRef, id: 'living' },
            { ref: nonLivingDropZoneRef, id: 'non-living' },
        ];

        zones.forEach(({ ref, id }) => {
            const dropzone = ref.current;

            if (dropzone) {
                dropzone.addEventListener('dragover', (e) => handleDragOver(e, dropzone));
                dropzone.addEventListener('dragleave', (e) => handleDragLeave(e, dropzone));
                dropzone.addEventListener('drop', (e) => handleDrop(e, dropzone, id));
            }
        });

        return () => {
            zones.forEach(({ ref }) => {
            const dropzone = ref.current;
            if (dropzone) {
                dropzone.removeEventListener('dragover', handleDragOver);
                dropzone.removeEventListener('dragleave', handleDragLeave);
                dropzone.removeEventListener('drop', handleDrop);
            }
        });
        };
    }, [dragItems]); 

    return (
        <div>
            <div id="json-data"></div>
            {errorMessage !== '' && <p id="error-message">{errorMessage}</p>}
            <div className="drop-container">
                <div ref={livingDropZoneRef} id="living-drop-zone" className="drop-zone">
                    Drop Living Items Here
                </div>
            <div ref={nonLivingDropZoneRef} id="non-living-drop-zone" className="drop-zone">
                Drop Non-Living Items Here
            </div>
        </div>
        </div>
    );
}

export default DragDropExample;
