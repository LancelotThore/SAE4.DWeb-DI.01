<?php

namespace App\Controller\Admin;

use App\Entity\Movie;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;

class MovieCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Movie::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('name');
        yield AssociationField::new('category');
        yield ImageField::new('image')
            ->setBasePath('uploads/') // Le chemin où les images sont stockées
            ->setUploadDir('public/uploads/') // Le dossier où les images seront téléchargées
            ->setUploadedFileNamePattern('[randomhash].[extension]') // Le nom du fichier sera un hash aléatoire
            ->setRequired(false); // Le champ image n'est pas obligatoire
        yield TextField::new('description');
        yield TextField::new('video');
    }
    
}
