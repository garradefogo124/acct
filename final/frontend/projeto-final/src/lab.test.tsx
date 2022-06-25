export function Tests() {}
/*

async function getAnimals() {
    const response = await window.fetch("http://localhost:4000/animal", {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });

    const { data, errors } = await response.json();
    if (response.ok) {
      const animals = data?.animals;
      if (animals) {
        setAnimals(animals);
        return animals;
      } else {
        return Promise.reject(new Error("A busca não foi bem sucedida"));
      }
    } else {
      const error = new Error(
        errors?.map((e: { message: string }) => e.message).join("\n") ??
          "unknown"
      );
      return Promise.reject(error);
    }
  }


  const newAnimal = () => {
    axios
      .post("http://localhost:4000/animal/new", {
        name: "Max",
        species: "Pinguim",
        gender: "F",
        imgUrl: "https://fluencydesign.com.br/micael/img/zebra.png",
        status: "Saudável",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // CADASTRAR NOVO ANIMAL
  const handleCreate = useCallback(async ()=> {
    await newAnimal({ dados do form })
    await getAnimals()
  }, [newAnimal, state-dos-dados-do-form, getAnimals])

  */

/*
  
  {animals !== null ? (
              <>
                {isFetching && <p>Carregando...</p>}
                <Splide
                  options={{
                    rewind: true,
                    gap: "1rem",
                    perPage: 4,
                  }}
                >
                  {animals?.map((item, index) => (
                    <SplideSlide key={index}>
                      <Card
                        name={item.animals[index].name}
                        species={item.animals[index].species}
                        gender={item.animals[index].gender}
                        imgUrl={item.animals[index].imgUrl}
                        status={item.animals[index].status}
                        id={item.animals[index]._id}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </>
            ) : (
              <div className="not-found">
                <img src="./img/paws.png" alt="Icone not found" width={100} />
                <h3>Nenhum animal encontrado</h3>
              </div>
            )}
  
  */
