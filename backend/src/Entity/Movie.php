<?php

namespace App\Entity;

use App\Repository\MovieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


#[ORM\Entity(repositoryClass: MovieRepository::class)]
#[Groups(['json_movie'])]
class Movie
{
   #[ORM\Id]
   #[ORM\GeneratedValue]
   #[ORM\Column]
   #[Groups(['json_movies', 'json_category', 'json_search', 'json_playlist'])]
   private ?int $id = null;


    #[ORM\Column(length: 255)]
    #[Groups(['json_movies', 'json_category', 'json_search', 'json_playlist'])]
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'movies')]
    #[Groups(['json_movies'])]
    private Collection $category;

    #[ORM\Column(length: 255)]
    #[Groups(['json_movies', 'json_search', 'json_category', 'json_playlist'])]
    private ?string $image = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $video = null;

    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'movie')]
    private Collection $users;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->category->removeElement($category);

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getVideo(): ?string
    {
        return $this->video;
    }

    public function setVideo(string $video): static
    {
        $this->video = $video;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->addMovie($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user)) {
            $user->removeMovie($this);
        }

        return $this;
    }
}
